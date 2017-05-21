import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import 'rxjs/add/operator/map';


@Component({
  selector: 'cols',
  templateUrl: './cols.component.html'
})

export class ColsComponent implements OnInit{
	@Input('group') contractGroup: FormGroup;
	@Input('numberofvertices') numberofvertices: number;

	constructor(private _fb: FormBuilder) {

	}
	
	ngOnInit() {
		const cols = <FormArray>this.contractGroup.controls['cols'];
		for (var _i = 1; _i <= this.numberofvertices; _i++) {
			const newNum = this.initCol();
        	cols.push(newNum);
		}
	}

	initCol() {
		return this._fb.group({
			num: ['', Validators.required]
		});
	}

}
