import { Component, OnInit } from '@angular/core';
import { JohnsonsAlgorithm } from '../_model/johnsonsAlgorithm';
import { johnsonsAlgorithmService } from '../_service/johnsonsAlgorithm.service';

import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
	numberofvertices: number;
	johnsonsAlgorithm: JohnsonsAlgorithm;

	// public testForm: FormGroup; // our model driven form
	public submitted: boolean; // keep track on whether form is submitted
	trustForm: FormGroup;
	public result: string = "TEST";
	
	constructor(private _fb: FormBuilder, private johnsonsAlgorithmService: johnsonsAlgorithmService) {

	}
	
	ngOnInit() {
		this.trustForm = this._fb.group({
			rows: this._fb.array([])
		});
	}


	initRow() {
		return this._fb.group({
			cols: this._fb.array([])
		});
	}

	addRow(vertices: HTMLInputElement) {
		this.trustForm = this._fb.group({
			rows: this._fb.array([])
		});
		const contractArray = <FormArray>this.trustForm.controls['rows'];
		this.numberofvertices = Number(vertices.value);
		for (var _i = 1; _i <= this.numberofvertices; _i++) {
			const newContract = this.initRow();
			contractArray.push(newContract);	
		}
	}


	find(model){
		this.submitted = true; // set form submit to true
		this.johnsonsAlgorithm = new JohnsonsAlgorithm();
		this.johnsonsAlgorithm.numberofvertices = this.numberofvertices;
		let index = 0;
		
		for (var _i = 0; _i < this.numberofvertices; _i++) {
			let row = [];
			let name = model.value.rows[_i];
			for (var _j = 0; _j < this.numberofvertices; _j++) {
				row.push(Number(name.cols[_j].num));
			}
			this.johnsonsAlgorithm.adjacencymatrix.push(row);
		}

		this.johnsonsAlgorithmService.post(this.johnsonsAlgorithm).subscribe( result => {
			this.johnsonsAlgorithm.adjacencymatrix = result.adjacencymatrix;
			this.johnsonsAlgorithm.distancematrix = result.distancematrix;
			this.johnsonsAlgorithm.allPairShortestPath = result.allPairShortestPath;
			this.result = this.johnsonsAlgorithm.result();
		});
	}
}
