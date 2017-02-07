/**
 * Created by harryliu on 2/5/17.
 */
interface Owner {
    login: string;
}
interface Repository {
    name: string,
    owner: Owner,
    language: string,
    private: boolean
}