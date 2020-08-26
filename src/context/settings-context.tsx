import { getStoredCategoriesArray } from 'lib/utils';
import React, { createContext, useContext, useState, useMemo } from 'react';
import { Category } from 'models/category';

const initialCategories = getStoredCategoriesArray() || Object.keys(Category).map((c) => Number(c));

const CategoriesContext = createContext(initialCategories);

export function useCategories(): {
  categories: number[];
  setCategories: (categories: number[]) => void;
} {
  const context = useContext(CategoriesContext);
  return context;
}

export function SettingsProvider(props: any) {
  const [categories, setCategories] = useState(initialCategories);
  const value = useMemo(() => ({ categories, setCategories }), [categories]);
  return <CategoriesContext.Provider value={value} {...props} />;
}
