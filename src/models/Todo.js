const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    title: {
      type: String,
      required: [true, "Todo title is required"],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      required: [true, "Todo date is required"],
      type: Date,
    },
  },
  { timestamps: true }
);

// Pre-save hook to set completedAt
TodoSchema.pre("save", function (next) {
  if (this.isModified("completed") && this.completed) {
    this.completedAt = new Date();
  }
  next();
});

module.exports = mongoose.model("Todo", TodoSchema);
