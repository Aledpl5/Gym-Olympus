import Card from '../../components/Card';
import FormData from "../../components/FormData"

function Landing() {
    return (
      <div className="flex justify-center items-center h-screen px-9 lg:px-0">
        <div>
          <Card>
           <FormData /> 
          </Card>
        </div>
      </div>
    );
  }
  
  export default Landing;
  