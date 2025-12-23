import { categories } from '@/data/foodData';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-primary text-primary-foreground shadow-button'
              : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span className="font-medium text-sm">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
