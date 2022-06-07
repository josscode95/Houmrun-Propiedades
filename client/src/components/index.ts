import { PropertyCardHOCProps } from '../interfaces/properties';

import { PropertyCard as PropertyCardHOC } from './PropertyCard';
import { PropertyTitle } from './PropertyTitle';
import { PropertyImage } from './PropertyImage';
import { PropertyDescription } from './PropertyDescription';
import { PropertyButton } from './PropertyButton';

export { PropertyTitle } from './PropertyTitle';
export { PropertyImage } from './PropertyImage';
export { PropertyDescription } from './PropertyDescription';
export { PropertyButton } from './PropertyButton';


export const PropertyCard:PropertyCardHOCProps = Object.assign(PropertyCardHOC, {
  Title: PropertyTitle,
  Image: PropertyImage,
  Description: PropertyDescription,
  PropertyButton: PropertyButton
})