import axios from "axios";
import { CreateContributionResponse } from "./types/create-contribution-response.dto";
import { UploadImageResponse } from "./types/upload-image-response.dto";

type PostInput = {
  title: string
  desctiprion: string
  tags: string[]
  original: boolean
}
export class ContributionService {
  static async upload(file: File) {
    return (await axios.post('contribution/upload', file)).data as UploadImageResponse
  }

  static async post(data: PostInput, draftId: string) {
    return (await axios.post(`/contribution/create-contribution/${draftId}`, data)).data as CreateContributionResponse
  }
}