import mongoose, {Schema} from 'mongoose';

const JobSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      postedBy: {
        type: String,
        required: true,
      },
}, {
    timestamps: true,
});

const Job = mongoose.models.Job || mongoose.model('Job', JobSchema);

export default Job;