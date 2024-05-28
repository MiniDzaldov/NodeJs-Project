import repo from "../repositories/TypeRequestRepo.js";
import BaseService from "./BaseService.js";

class TypeRequestService extends BaseService {
    constructor(repo) {
        super(repo);
    }
}
export default new TypeRequestService(repo);