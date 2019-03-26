import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import BarraOpcao from '../componentes/BarraOpcao';
import Opcao from '../componentes/Opcao';
import MenuLateral from '../componentes/MenuLateral';
import SobreOcurso from '../componentes/SobreOcurso';
import Alunos from '../alunos/Alunos';
import Turmas  from '../turmas/Turmas';
/**
 * Esta classe menu chama o componente de botoes principal da aplicacao
 */
class Menu extends React.Component {
  state = {
    isLoading: false,
    isMenuOpen: false,
    saveHasError: false
  };

  handleOpenMenu = () => {
    this.setState({ isMenuOpen: true });
  };

  handleCloseMenu = () => {
    this.setState({ isMenuOpen: false });
  };

  render() {
    const {
      isLoading,
      isMenuOpen,
      saveHasError
    }= this.state;
    return (
      <Router>
         <div>
            <BarraOpcao isLoading={isLoading}
              saveHasError={saveHasError}
              onOpenMenu={this.handleOpenMenu}/>
                <div className='container'>
                    <React.Fragment>
                      <Route path="/" exact component={Opcao} />
                      <Route path="/alunos"  component={Alunos} />
                      <Route path="/turmas"   component={Turmas} />
                      <Route path="/sobre"  component={SobreOcurso} />
                    </React.Fragment>
                </div>
                <MenuLateral
                   isOpen={isMenuOpen}
                   onCloseMenu={this.handleCloseMenu} />
         </div>
       </Router>
      );
  }

}
export default Menu;