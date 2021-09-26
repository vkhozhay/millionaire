import { HexagonVariants } from '../../Hexagon/typings/enums';

const getHexagonVariant = (progress:number, index:number):string => {
  if (progress > index) {
    return HexagonVariants.DISABLE;
  }
  if (progress === index) {
    return HexagonVariants.ACTIVE;
  }
  return HexagonVariants.DEFAULT;
};

export default getHexagonVariant;
