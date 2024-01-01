import { Schema, Document, model, Types  } from 'mongoose'

interface NoteInterface extends Document { 
    content : string;
    owner : Types.ObjectId
}

const noteSchema = new Schema<NoteInterface>({
    content : {
        type : String,
        required : true
    },

    owner : { 
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    }
})

const NoteModel = model<NoteInterface>('Note', noteSchema)

export default NoteModel

