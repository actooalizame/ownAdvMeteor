import React from 'react';

const MainLayout = function({content}){
  return (
  
    	<div className="container">
    		<div className="row">
    			
    			<div className="">
    				{content}

    			</div>
    			
    		</div>
    	</div>
   
  	)
}

export default MainLayout;