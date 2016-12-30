/**
 * Individual creator page
 */

import React, { Component } from 'react';
import styled from 'styled-components';

import Cell from './Cell';
import Video from './Video';

/**
 * @section Styles
 */

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 8px 48px rgba(0, 80, 102, 0.2);
  padding: 64px;
`;

/**
 * @section Template
 */

export default class extends Component {
  render() {
    return (
      <div>
        <Cell large>
          <Video src={`https://www.youtube.com/embed/${this.props.creator.videoID}`} />
        </Cell>
        <Cell>
          <Card>
            <h1>Testing Header</h1>
            <div>
              <p>
              Bacon ipsum dolor amet ball tip jerky picanha, pork chop ground
              round brisket fatback meatball prosciutto short loin. Filet mignon
              short ribs sausage bacon pork shankle, bresaola alcatra. Capicola
              turducken andouille shankle chicken venison ribeye ball tip swine
              boudin brisket sausage kielbasa hamburger. Cupim jerky turducken
              beef ribs, spare ribs pork pancetta leberkas fatback ham tenderloin
              boudin. Pig tail alcatra, jerky ham hock turkey beef flank strip
              steak pork loin chicken.
              </p>
              <p>
              Ham jowl flank pastrami. Pork belly ham hock kielbasa, bacon
              biltong corned beef t-bone. Ham hamburger filet mignon biltong
              jowl. Shankle capicola short ribs, short loin venison t-bone
              frankfurter tri-tip. Biltong beef ribs bresaola kevin jerky.
              Pastrami salami shoulder corned beef ham hock.
              </p>
              <p>
              Chicken turkey meatball fatback strip steak sirloin. Turducken
              chicken short loin venison. Short ribs picanha prosciutto pork
              belly alcatra drumstick. Ground round frankfurter turducken shankle
              strip steak. Jerky pastrami pancetta shank pig ball tip. Rump bacon
              kevin, porchetta burgdoggen flank ham pork. Filet mignon picanha
              landjaeger kevin meatball ribeye cow ham hock.
              </p>
              <p>
              Fatback kevin drumstick burgdoggen chuck. Ball tip turducken rump
              pork belly beef ribs. Short loin beef ribs bacon salami biltong
              tongue alcatra pork loin drumstick. Ground round sirloin bresaola
              drumstick hamburger pork, capicola boudin short loin meatloaf. Pork
              chop sausage prosciutto ribeye kevin turducken, pastrami short loin
              hamburger shankle kielbasa beef sirloin pork belly. Porchetta
              picanha cow, short loin pancetta chuck rump prosciutto.
              </p>
              <p>
              Fatback shoulder short ribs hamburger tenderloin flank ground
              round venison shankle sausage chicken beef, pork belly jerky cupim.
              Ham tongue ball tip bacon short loin strip steak ground round
              frankfurter beef ribs bresaola turkey. Shankle ball tip ham hock
              ribeye shank doner. Short loin swine frankfurter turkey rump
              meatball. Porchetta pig ham spare ribs, turducken prosciutto short
              ribs ball tip turkey ham hock doner tenderloin hamburger pork loin.
              Cupim burgdoggen short ribs brisket. Pork belly t-bone picanha,
              rump chicken pig brisket landjaeger shank beef.
              </p>
            </div>
          </Card>
        </Cell>
      </div>
    );
  }
}
