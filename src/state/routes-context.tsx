import { getStoredCategoriesString, getStoredCategoriesArray } from 'lib/utils';
import React, { createContext, useContext, useState, useMemo } from 'react';
import { Category } from 'models/category';

const initialCategories = getStoredCategoriesArray() || Object.keys(Category).map((c) => Number(c));

const CategoriesContext = createContext<number[]>(initialCategories);

function useCategories() {
  const context = useContext<any>(CategoriesContext);
  if (!context) throw new Error('useCategories must be used with a CategoriesProvider');
  return context;
}

function CategoriesProvider(props: any) {
  const [categories, setCategories] = useState(initialCategories);
  const value = useMemo(() => [categories, setCategories], [categories]);
  return <CategoriesContext.Provider value={value} {...props} />;
}

export { useCategories, CategoriesProvider };
