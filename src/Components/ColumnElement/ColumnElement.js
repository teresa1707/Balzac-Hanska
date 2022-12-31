import React from "react";
import './ColumnElement.scss'
import { Card, Grid } from "@mui/material";

export const ColumnElement =()=>{
  return(
    <>
   <Grid container>
    <Grid item sm={12} md={4}><Card className="cardItem">
                        <div className="title2">inspiration</div>
                        <div className="text2 italic">
                            <p>
                                "Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Id, illum vero, atque
                                asperiores quae, sint nulla aspernatur deserunt
                                eveniet vel eligendi doloremque. Sequi quisquam,
                                velit blanditiis animi tempora minima esse!"
                            </p>
                            <p>Author</p>
                        </div>
                    </Card>
                    </Grid>
    <Grid item sm={12} md={4}><Card className="cardItem">
                        <div className="title2">Our mission</div>
                        <div className="text2">
                            <p>
                                Fugiat possimus perferendis odio laudantium
                                error vero maxime quasi architecto distinctio
                                eaque aliquid ut excepturi ea eius, illum
                                labore. Quo, velit et?
                            </p>
                        </div>
                    </Card>
                    </Grid>
    <Grid item sm={12} md={4}>
    <Card className="cardItem">
                        <div className="title2">Become our author</div>
                        <div className="text2">
                            <p>
                                Fugiat possimus perferendis odio laudantium
                                error vero maxime quasi architecto distinctio
                                eaque aliquid ut excepturi ea eius, illum
                                labore.{' '}
                                <span
                                    style={{
                                        color: 'orangered',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Want to join us?
                                </span>
                            </p>
                        </div>
                       
                    </Card>
                    </Grid>
   </Grid>
              
                    
                
                
                    
               

                
                   
                
            
    </>
  )
}