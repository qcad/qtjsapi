
      // auto generated
      //var self;

      // class constructor:
      function QPageLayout() {
        

        // should be QPageLayout_BaseJs.call(this, engine):
        //QPageLayout.prototype = new QPageLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QPageLayout.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  copyProperties(this, wrapper, QPageLayout);
                
            //}
          }
          else {
            qWarning("QPageLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 3 &&
          arguments.length <= 5) {
    
            self = this;
            wrapper = new QPageLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPageLayout);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageLayout);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QPageLayout_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPageLayout);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QPageLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            copyProperties(this, wrapper, QPageLayout);
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QPageLayout);
  }

  
  else {
    
        print("QPageLayout(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          
        }

        

      }

      //QPageLayout.prototype = new QPageLayout_BaseJs(engine);
      //QPageLayout.prototype = new QPageLayout_Wrapper(engine);
      QPageLayout.prototype = new Object();

      QPageLayout.prototype.toString = function() {
          //return "QPageLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QPageLayout [JS]";
        };
      QPageLayout.getObjectType = function() {
        return RJSType_QPageLayout.getIdStatic();
      };

      QPageLayout.prototype.getObjectType = function() {
        return RJSType_QPageLayout.getIdStatic();
      };

      QPageLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QPageLayout.getIdStatic()) {
          return true;
        }

        

        return false;


        
      };

      // enum values:
      
  // enum: Unit
QPageLayout.Millimeter = QPageLayout_Wrapper.Millimeter;
QPageLayout.Point = QPageLayout_Wrapper.Point;
QPageLayout.Inch = QPageLayout_Wrapper.Inch;
QPageLayout.Pica = QPageLayout_Wrapper.Pica;
QPageLayout.Didot = QPageLayout_Wrapper.Didot;
QPageLayout.Cicero = QPageLayout_Wrapper.Cicero;

  // enum: Orientation
QPageLayout.Portrait = QPageLayout_Wrapper.Portrait;
QPageLayout.Landscape = QPageLayout_Wrapper.Landscape;

  // enum: Mode
QPageLayout.StandardMode = QPageLayout_Wrapper.StandardMode;
QPageLayout.FullPageMode = QPageLayout_Wrapper.FullPageMode;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QPageLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QPageLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      