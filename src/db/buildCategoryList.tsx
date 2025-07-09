type RawCategory = {
    id: number;
    parent_id: number;
    level: number;
    name: string;
    slug: string;
  };

   type MainCategory = {
    name: string;
    url: string;
    img: string;
    subcategories: SubCategory[];
  };

   type SubCategory = {
    label: string;
    url: string;
    subcategories: SubSubCategory[];
  };
  
  type SubSubCategory = {
    name: string;
    url: string;
  };
  
  
  export async function buildCategoryList(categories: RawCategory[]): Promise<MainCategory[]> {
    const categoryMap = new Map<number, MainCategory | SubCategory>();
  
    const mainCategories: MainCategory[] = [];
  
    // First, map all main categories
    categories.forEach((cat) => {
      if (cat.level === 0) {
        const url = `/${cat.name.toLowerCase().replace(/&|and/gi, '').trim().split(' ')[0]}`; //lowercase of name
        categoryMap.set(cat.id, {
          name: cat.name,
          url,
          img: "/images/categories/shoes.avif", // static or dynamic
          subcategories: [],
        });
      }
    });
  
    // Now map subcategories (level 1)
    categories.forEach((cat) => {
      if (cat.level === 1) {
        const parent = categoryMap.get(cat.parent_id) as MainCategory | undefined;
        if (parent) {
          const url = `${parent.url}/${cat.name.toLowerCase().replace(/&|and/gi, '').trim().split(' ')[0]}`; // Child: /parent-url/lowercase-label
          const subCategory: SubCategory = {
            label: cat.name,
            url,
            subcategories: [],
          };
          categoryMap.set(cat.id, subCategory);
          parent.subcategories.push(subCategory);
        }
      }
    });
  
    // Now map sub-subcategories (level 2)
    categories.forEach((cat) => {
      if (cat.level === 2) {
        const parent = categoryMap.get(cat.parent_id) as SubCategory | undefined;
        if (parent) {
          const url = `${parent.url}/${cat.name.toLowerCase().replace(/&|and/gi, '').trim().split(' ')[0]}`; // Grandchild: /parent-url/lowercase-name
          parent.subcategories.push({
            name: cat.name,
            url,
          });
        }
      }
    });
  
    // Finally, collect main categories
    categories.forEach((cat) => {
      if (cat.level === 0) {
        const mainCategory = categoryMap.get(cat.id) as MainCategory;
        mainCategories.push(mainCategory);
      }
    });
  
    return mainCategories;
  }
  
  