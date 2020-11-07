import React, { Component } from 'react';
import { RECIPES } from '../shared/recipes'

class Recipes extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section name="cards">
            <div class="container-fluid py-5" id="cardsSection">
              <div class="row">
                <div class="col text-center">
                  <h1 class="text-white text-align-center">Breakfast</h1>
                </div>
              </div>
              <div class="row row-content">
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal1.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
                      earum.
                    </p>
                  </div>
                </div>
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal2.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                      ipsam.
                    </p>
                  </div>
                </div>
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal3.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt, deleniti.
                    </p>
                  </div>
                </div>
              </div>
              <div class="row row-content pb-5">
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal1.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                      maiores?
                    </p>
                  </div>
                </div>
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal2.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                      officia..
                    </p>
                  </div>
                </div>
                <div class="card mx-auto mt-5" style="width: 18rem">
                  <h2 class="text-white position-absolute pl-3 pt-3">Title Text</h2>
                  <img
                    class="card-img-top"
                    src="img/meal3.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                      aliquid!.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
            )

};
}

export default Recipes;