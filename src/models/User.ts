import { model, Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface UserInterface extends Document {
    email: string,
    senha: string,
    compareSenha?: (senha: string) => Promise<boolean>;
}

const userSchema = new Schema(
    {
        email: {type: String, required: true, unique: true},
        senha: {type: String, require: true}
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', async function (next) {
    const user = this as UserInterface;
    if (!user.isModified('senha')) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        user.senha = await bcrypt.hash(user.senha, salt);
        next();
    } catch (e: any) {
        next(e);
    }

});

userSchema.methods.compareSenha = function (senha: string): Promise<boolean>{
    return bcrypt.compare(senha, this.senha);
};

export const userModel = model("user", userSchema);