import React from "react";
import { H1 } from "../../styles/twStyles";
import Chart from "./Chart";
import IncomeForm from "./IncomeForm";
import ExpenseForm from "./ExpenseForm";
import Transactions from "./Transactions";

export default function Home() {
	return (
		<div className="container mx-auto px-4 h-screen overflow-y-auto">
			<div className="expense_form">
				<h1 className={H1}>Add Income</h1>
				<IncomeForm />
				<hr className="mt-3" />
			</div>
			<div className="expense_form mt-4">
				<h1 className={H1}>Add Expense</h1>
				<ExpenseForm />
				<hr className="mt-3" />
			</div>

			<div className="expenses_content flex flex-wrap gap-x-10 mt-4">
				<Transactions />
				<Chart type="Doughnut" title="States" width="25vh" />
			</div>
		</div>
	);
}
