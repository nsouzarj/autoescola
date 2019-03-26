/**
 * Me basiei na classe do curso
 */

let failLoad = 2;
let failSave = 2;
class ServicoAluno {
    //Ler os alunos
    static load() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failLoad > 1) {
                    const alunos = window.localStorage.getItem("alunos");
                    resolve(alunos ? JSON.parse(alunos) : []);
                } else {
                    reject();
                    failLoad++;
                }

            }, 2000);
        });
    }

    //Salba o aluno na base temporaria
    static save(alunos) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (failSave > 1) {
                    window.localStorage.setItem("alunos", JSON.stringify(alunos));
                    resolve();
                } else {
                    reject();
                    failSave++;
                }
            }, 2000);

        });
    }
}

export default ServicoAluno;