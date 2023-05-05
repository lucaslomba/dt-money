import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
    return (
        <div>
            <Header/>
            <Summary/>

            <TransactionsContainer>
                <TransactionsTable>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                                R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">Aluguel do apartamento</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                - R$ 1.200,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>13/04/2022</td>
                    </tr>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}