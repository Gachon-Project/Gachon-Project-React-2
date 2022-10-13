import React, {Component} from 'react';

class Myr extends Component {
    render() {
      return(
        <section id="fridge">
          <div class="fridge_ctn">
            <div class="fridge_empty"></div>
            <div class="fridge_img">
              <div class="fridge_material">
                <img src="/image/youtube.png" alt=""></img>
                <p>[음식 이름]</p>
              </div>
            </div>
            <div class="cont2">
              <a href="/recipe" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('recipe')
              }.bind(this)}>레시피 확인</a>
            </div>
          </div>
        </section>
      );
    }
  }

  export default Myr;