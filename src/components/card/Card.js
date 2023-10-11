import React from "react";

function Card({ cards = [] }) {
  return (
    <>
      {cards.length === 0 ? (
        <div>No Data Found</div>
      ) : (
        <div className="cards">
          {cards.map((card) => {
            return (
              <div className="card">
                <img src={card.flags.png} alt="flag" />
                <div className="countryName">{card.name.common}</div>
                <div className="countryRegion">{card.region}</div>
                <div>
                  {card.currencies &&
                  Object.values(card.currencies).length >= 1 ? (
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "gray",
                        padding: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: "20%",
                        }}
                      >
                        <div className="currencySymbol">
                          {Object.values(card.currencies)[0].symbol}
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {Object.values(card.currencies)[0].name}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div style={{ marginTop: "4px" }}>
                  {card.languages &&
                  Object.values(card.languages).length >= 1 ? (
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "gray",
                        padding: "4px",
                      }}
                    >
                      <div
                        style={{
                          width: "20%",
                        }}
                      >
                        <div className="currencySymbol">Ae</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {Object.values(card.languages)[0]}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontWeight: "bolder" }}>
                      {card.population}
                    </div>
                    <div>Population</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ fontWeight: "bolder" }}>{card.area}</div>
                    <div>Area</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Card;
