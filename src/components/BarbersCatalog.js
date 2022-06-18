import { getBarbers } from "../db";
import { BarberCard } from "../styled/components/BarberCard";
import { Container } from "../styled/components/Container";

function BarbersCatalog({activeUser, setReview }) {
    return (
        <Container>
        {
          getBarbers().map(barber => 
            <BarberCard
              key={barber.id}
            >
              <p>Name: { barber.name }</p>
              <p>Email: { barber.email } </p>
              <p>Price: { barber.price }$</p>
              <p>Address: { barber.address }</p>
              <p>Phone: { barber.phone }</p>
                {
                  barber.reviews.length ?
                  barber.reviews.map(review => 
                      <ul key={review.id}>
                        <li>rate: { review.rate }</li>
                        <li>description: { review.text }</li>
                      </ul>
                    ):
                    <p>No reviews</p>
                }
                {
                  activeUser 
                  ? <button onClick={() => setReview(barber.id)}>Add review</button>
                  : ''
                }
              
            </BarberCard>
            )
        }      
      </Container>
    )
}

export default BarbersCatalog;