/**
 * Me basiei na classe do curso
 */

let failLoad = 2;
let failSave = 2;
class ServicoTurma {
    //Ler as turmas
    static load() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failLoad > 1) {
                    const turmas = window.localStorage.getItem("turmas");
                    resolve(turmas ? JSON.parse(turmas) : []);
                } else {
                    reject();
                    failLoad++;
                }

            }, 2000);
        });
    }

    //Salva as turmas
    static save(turmas) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failSave > 1) {
                    window.localStorage.setItem("turmas", JSON.stringify(turmas));
                    resolve();
                } else {
                    reject();
                    failSave++;
                }
            }, 2000);

        });
    }
}

export default ServicoTurma;