import $ from 'jquery';
import 'react-jqueryui';

class NavbarAction extends Component { 
  render() {
    return (
      $(document).ready( function() {
        $("button").click( function() {
          $("#navbarBasic").animate( {
            opacity: "toggle",
            backgroundColor: "#fff"
          }, 300);
        });
      });
    );
  }
}

export default NavbarAction;