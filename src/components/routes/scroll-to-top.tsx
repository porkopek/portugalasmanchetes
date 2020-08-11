import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useCategories } from 'state/settings-context';
export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [categories] = useCategories();
  // const { action } = useHistory();
  useEffect(() => {
    //if (action === 'POP') return;
    window.scrollTo(0, 0);
  }, [pathname, categories]);

  return null;
}
