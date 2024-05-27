import repo from "../repositories/LocationRepo.js";
import BaseService from "./BaseService.js";

class LocationRepo extends BaseService {
    constructor(repo) {
        super(repo);
    }
}
export default new LocationRepo(repo);