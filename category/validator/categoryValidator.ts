import {UpdateCategoryCountParams} from "../constant/categoryConstant";
import {General_Errors} from "../../utils/utils";

export function validateUpdateCategoryCountInput(updateCategoryCountParams: UpdateCategoryCountParams): UpdateCategoryCountParams {
  const {categoryId, counter} = updateCategoryCountParams;
  if (!categoryId || typeof categoryId !== "number" ||
      !counter || typeof counter !== "number") {
    throw {err: General_Errors.REQUEST_BODY_IS_NOT_VALID};
  } else {
    return updateCategoryCountParams;
  }
}