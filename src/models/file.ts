export default interface IFile {
    id: number,
    user_id: number,
    folder: string,
    send_time: Date,
    code: number,
    remain: number,
    validity: number
}