import { PageCategory, PageModel } from '@/src/interfaces/page.interface';
import { ProductModel } from '@/src/interfaces/product.interface';

export interface CoursePageComponentProps {
	firstCategory: PageCategory;
	page: PageModel;
	products: ProductModel[];
}
