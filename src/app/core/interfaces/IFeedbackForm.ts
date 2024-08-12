import { FeedbackStatus } from "../constants/FeedbackStatus";
import { Feedback } from "../constants/Feedback";

export interface IFeedbackForm {
    id:string;
    name: string;
    email: string;
    feedbackType: Feedback;
    feedback: string;
    feedbackStatus:FeedbackStatus
  }