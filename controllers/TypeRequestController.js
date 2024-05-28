import BaseController from "./BaseController.js";
import service from "../services/TypeRequestService.js"

class TypeRequestController extends BaseController {
    constructor(service) {
        super(service);        
    }
}
export default new TypeRequestController(service);