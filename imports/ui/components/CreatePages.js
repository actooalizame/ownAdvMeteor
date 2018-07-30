import React, { Component } from 'react';
import {render} from 'react-dom';
import { Meteor } from 'meteor/meteor';



export default class CreatePages extends Component {

	constructor(props) {
    super(props);
  };


  
  insertNewPage(e){
    e.preventDefault();
    let data = {
      pageCode: e.target.pageCode.value,
      pageText: e.target.pageText.value
    }

  Meteor.call('insertNewPage',data);
  }

  insertNewOption(e){
    e.preventDefault();
    let data = {
      pageCode: e.target.pageCode.value,
      link: e.target.link.value,
      optionText: e.target.optionText.value
    }

  Meteor.call('insertNewOption',data);
  }

  render() {
  	return(
  			<div>
  					

  					<form onSubmit={this.insertNewPage}>
  						<input type="text" name="pageCode" className="page-code" />
  						<textarea name="pageText"></textarea>
              <button type="submit" className="waves-effect waves-light btn">Crear Pagina</button>
  					</form>
            <hr/>
            <form onSubmit={this.insertNewOption}>
              <input type="text" name="pageCode" className="page-code" />
              <input type="text" name="link" className="option-link" />
              <textarea name="optionText"></textarea>
              <button type="submit" className="waves-effect waves-light btn">Insertar Opcion</button>
            </form>
  					
  					
  			</div>
  		
  		)
  }

}