import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AfterViewInit, OnInit, Renderer2 } from '@angular/core';
import { formatCurrency } from '@angular/common';

declare const $ : any;

@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.css']
})
export class ForexComponent implements OnInit, AfterViewInit{
  private _table1 : any;

  constructor(private renderer : Renderer2, private http : HttpClient) { }

  ngAfterViewInit(): void {
      this.renderer.removeClass(document.body, "sidebar-open");
      this.renderer.addClass(document.body, "sidebar-Closed");

      this._table1 = $("#table1").DataTable
      (
        {
          "columnDefs" :
          [
            {
            "targets" : 2,
            "className" : "text-right"
            }
          ]
        }
      );

      this.getData();
  }

  ngOnInit(): void {
  }
  
  getData(): void {
    console.log("getData()");

    var url = "https://openexchangerates.org/api/latest.json?app_id=ea8c9aee7d254856b9954831065439b6";

    this.http.get(url)
    .subscribe((data : any) => {
      console.log(data);

      var rates = data.rates;
      console.log(rates);

      var idr = rates.IDR;
      var idr2 = formatCurrency(idr, "en-US", "", "USD");
      console.log("USD : " + idr2);
      var row = [ 1, "USD", idr2 ];
      this._table1.row.add(row);

      
      var sgd = rates.IDR / rates.SGD;
      var sgd2 = formatCurrency(sgd, "en-US", "", "SGD");
      console.log("SGD : " + sgd2);
      var row = [ 2, "SGD", sgd2 ];
      this._table1.row.add(row);

      var bnd = rates.IDR / rates.BND;
      var bnd2 = formatCurrency(bnd, "en-US", "", "BND");
      console.log("BND : " + bnd2);
      var row = [ 3, "BND", bnd2 ];
      this._table1.row.add(row);

      var hkd = rates.IDR / rates.HKD;
      var hkd2 = formatCurrency(hkd, "en-US", "", "HKD");
      console.log("HKD : " + hkd2);
      var row = [ 4, "HKD", hkd2 ];
      this._table1.row.add(row);

      var btc = rates.IDR / rates.BTC;
      var btc2 = formatCurrency(btc, "en-US", "", "BTC");
      console.log("BTC : " + btc2);
      var row = [ 5, "BTC", btc2 ];
      this._table1.row.add(row);

      var twd = rates.IDR / rates.TWD;
      var twd2 = formatCurrency(twd, "en-US", "", "TWD");
      console.log("TWD : " + twd2);
      var row = [ 6, "TWD", twd2 ];
      this._table1.row.add(row);

      var krw = rates.IDR / rates.KRW;
      var krw2 = formatCurrency(krw, "en-US", "", "KRW");
      console.log("KRW : " + krw2);
      var row = [ 7, "KRW", krw2 ];
      this._table1.row.add(row);

      var jpy = rates.IDR / rates.JPY;
      var jpy2 = formatCurrency(jpy, "en-US", "", "JPY");
      console.log("JPY : " + jpy2);
      var row = [ 8, "JPY", jpy2 ];
      this._table1.row.add(row);

      var uyu = rates.IDR / rates.UYU;
      var uyu2 = formatCurrency(uyu, "en-US", "", "UYU");
      console.log("UYU : " + uyu2);
      var row = [ 9, "UYU", uyu2 ];
      this._table1.row.add(row);

      var vuv = rates.IDR / rates.VUV;
      var vuv2 = formatCurrency(vuv, "en-US", "", "VUV");
      console.log("VUV : " + vuv2);
      var row = [ 10, "VUV", vuv2 ];
      this._table1.row.add(row);

      this._table1.draw(false);
    });
  }
}
