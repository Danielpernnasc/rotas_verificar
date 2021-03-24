import React from "react";

import Callout,{CalloutBody, CalloutAction, CalloutMedia} from "./Callout";
import Button from "./Button";
import SpeedImage from "../../draws/Speed";

export default {
 title: "Components/Atoms/Callout",
 component: Callout,
 subcomponents: {CalloutBody, CalloutAction, CalloutMedia}
};

export const usage = () => 
    <Callout>
        <CalloutBody>
            <h6>Faça sua matrícula agora mesmo</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste ea neque exercitationem magnam fugit, quam amet qui maiores aliquid impedit consequuntur totam, perferendis odio assumenda accusamus. Aut, ad asperiores.</p>
            <CalloutAction>
                <Button color="primary">Matricular</Button>
            </CalloutAction>
        </CalloutBody>
        <CalloutMedia>
            <SpeedImage />
        </CalloutMedia>
    </Callout>
;
