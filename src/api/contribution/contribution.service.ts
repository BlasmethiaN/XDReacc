import axios from "axios";
import { UploadImageResponse } from "./types/upload-image-response.dto";

export class ContributionService {
  static async upload(file: File) {
    return (await axios.post('contribution/upload', file)).data as UploadImageResponse
  }
}