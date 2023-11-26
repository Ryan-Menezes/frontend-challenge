import { FilterType } from '@/types/filter-type';
import { PriorityType } from '@/types/priority-type';

export function getCategoryByType(type: FilterType) {
  if (type === FilterType.MUG) return 'mugs'
  if (type === FilterType.SHIRT) return 't-shirts'
  return ''
}

export function getFieldByPriority(priority: PriorityType) {
  if (priority === PriorityType.NEWS) return {field: 'created_at', order: 'ASC'}
  if (priority === PriorityType.BIGGEST_PRICE) return {field: 'price_in_cents', order: 'DSC'}
  if (priority === PriorityType.MINOR_PRICE) return {field: 'price_in_cents', order: 'ASC'}
  return {field: 'sales', order: 'DSC'}
}

export const mountQuery = (type: FilterType, priority: PriorityType) => {
  if (type === FilterType.ALL && PriorityType.POPULARITY) {
    return `
      query(sortField: "sales", sortOrder: "DSC") {
        allProducts {
          id,
          name,
          price_in_cents,
          image_url
        }
      }
    `
  }

  const { field, order } = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(type)

  return `
    query {
    allProducts(sortField: "${field}", sortOrder: "${order}"${categoryFilter ? `, filter: { category: "${categoryFilter}" }` : ''}) {
        id,
        name,
        price_in_cents,
        image_url
      }
    }
  `
}
