import { Component } from 'react';
import PointsProgramService from '../services/PointsProgramService';
import withRouter from '../services/withRouter';

class ProgramView extends Component {

    
    constructor(props: any) {
        super(props);
        this.state = {
            program: [],
        };

        this.retrieveProgram(props.params.id);

        
    }

    retrieveProgram = (id) => {
        PointsProgramService.get(id)
        .then((response: any) => {
          this.setState({ program: response.data })
          console.log(response.data)
        })
        .catch((e: Error) => {
          console.log(e);
  
        });
    };


    render() {
        return (
            
            <div>
                <h2>Program View</h2>
            </div>);
    }
}

export default withRouter(ProgramView);