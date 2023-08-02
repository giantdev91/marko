import { Schema, model, Document, Types } from "mongoose";

export interface IQuest extends Document {
  title: String;
  image: String;
  description: String;
  status: String;
  startDate: Date;
  endDate: Date;
  project: Types.ObjectId;
  eligibility: IEligibility;
  tasks?: Types.ObjectId[];
  rewards?: Types.ObjectId[];
  // MB: ??? Not sure is needed
  // completions         Completion[]  @relation("UserQuestCompletion")
  /// ---------delayed----------///
  // isRecurrent: Boolean;
  // recurrenceInterval: String;
}
export interface IEligibility {
  eligibilityType: String;
  network?: String;
  contractAddress?: String;
  tokenAmount?: String;
  channelId?: String;
  roleType?: String;
}

export const QuestSchema = new Schema<IQuest>({
  title: String,
  image: String,
  description: String,
  status: {
    type: String,
    enum: ["DRAFT", "ACTIVE", "COMPLETED", "EXPIRED"],
    required: true,
    // TODO: Add post hook to disallow activation without reward
  },
  startDate: Date,
  endDate: Date,
  project: { type: Schema.Types.ObjectId, required: true, ref: "Project" },
  rewards: [{ type: Schema.Types.ObjectId, required: true, ref: "Reward" }],
  eligibility: new Schema<IEligibility>({
    eligibilityType: {
      type: String,
      enum: ["ALL_USERS", "NFT_HOLDERS", "TOKEN_HOLDERS", "DISCORD_ROLES"],
      required: true,
      default: "ALL_USERS",
    },
    network: {
      type: String,
      required: function () {
        return (
          this.eligibilityType === "NFT_HOLDERS" ||
          this.eligibilityType === "TOKEN_HOLDERS"
        );
      },
    },
    contractAddress: {
      type: String,
      required: function () {
        return (
          this.eligibilityType === "NFT_HOLDERS" ||
          this.eligibilityType === "TOKEN_HOLDERS"
        );
      },
    },
    tokenAmount: {
      type: String,
      required: function () {
        return this.eligibilityType === "TOKEN_HOLDERS";
      },
    },
    channelId: {
      type: String,
      required: function () {
        return this.eligibilityType === "DISCORD_ROLES";
      },
      roleType: {
        type: String,
        enum: ["SOCIAL", "ACTIVITY", "TECHNICAL", "EDUCATIONAL"],
      },
    },
  }),
  /////////////////----Recurence------/////////////////////
  //isRecurrent: { type: Boolean, default: false },
  //recurrenceInterval: String,
});

export const QuestModel = model<IQuest>("Quest", QuestSchema);
