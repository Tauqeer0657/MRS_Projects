import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <div className="main-container p-0">
    <div className="register-header p-2">
    <h3 style={{marginLeft:"20px", background:"white", color:"#9e9ea4", padding:"6px"}}>
          Globus
          <span
            style={{
              backgroundColor: "#db0a0a",
              color: "white",
              padding: "5px",
              marginLeft:"5px"
            }}
          >
            Labs
          </span>
        </h3>
 </div>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Employee Id</Form.Label>
        <Form.Control type="number" placeholder="Enter Employee id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default BasicExample;