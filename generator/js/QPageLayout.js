
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
              
                  this.__PROXY__ = wrapper;
                
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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
      
        // function 
        QPageLayout.prototype.swap = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.swap");
          
              return this.__PROXY__.swap(...args);
            
        };
        
        // function 
        QPageLayout.prototype.isEquivalentTo = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.isEquivalentTo");
          
              return this.__PROXY__.isEquivalentTo(...args);
            
        };
        
        // function 
        QPageLayout.prototype.isValid = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.isValid");
          
              return this.__PROXY__.isValid(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setMode = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setMode");
          
              return this.__PROXY__.setMode(...args);
            
        };
        
        // function 
        QPageLayout.prototype.mode = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.mode");
          
              return this.__PROXY__.mode(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setPageSize = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setPageSize");
          
              return this.__PROXY__.setPageSize(...args);
            
        };
        
        // function 
        QPageLayout.prototype.pageSize = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.pageSize");
          
              return this.__PROXY__.pageSize(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setOrientation = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setOrientation");
          
              return this.__PROXY__.setOrientation(...args);
            
        };
        
        // function 
        QPageLayout.prototype.orientation = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.orientation");
          
              return this.__PROXY__.orientation(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setUnits = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setUnits");
          
              return this.__PROXY__.setUnits(...args);
            
        };
        
        // function 
        QPageLayout.prototype.units = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.units");
          
              return this.__PROXY__.units(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setMargins = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setMargins");
          
              return this.__PROXY__.setMargins(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setLeftMargin = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setLeftMargin");
          
              return this.__PROXY__.setLeftMargin(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setRightMargin = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setRightMargin");
          
              return this.__PROXY__.setRightMargin(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setTopMargin = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setTopMargin");
          
              return this.__PROXY__.setTopMargin(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setBottomMargin = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setBottomMargin");
          
              return this.__PROXY__.setBottomMargin(...args);
            
        };
        
        // function 
        QPageLayout.prototype.margins = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.margins");
          
              return this.__PROXY__.margins(...args);
            
        };
        
        // function 
        QPageLayout.prototype.marginsPoints = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.marginsPoints");
          
              return this.__PROXY__.marginsPoints(...args);
            
        };
        
        // function 
        QPageLayout.prototype.marginsPixels = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.marginsPixels");
          
              return this.__PROXY__.marginsPixels(...args);
            
        };
        
        // function 
        QPageLayout.prototype.setMinimumMargins = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.setMinimumMargins");
          
              return this.__PROXY__.setMinimumMargins(...args);
            
        };
        
        // function 
        QPageLayout.prototype.minimumMargins = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.minimumMargins");
          
              return this.__PROXY__.minimumMargins(...args);
            
        };
        
        // function 
        QPageLayout.prototype.maximumMargins = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.maximumMargins");
          
              return this.__PROXY__.maximumMargins(...args);
            
        };
        
        // function 
        QPageLayout.prototype.fullRect = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.fullRect");
          
              return this.__PROXY__.fullRect(...args);
            
        };
        
        // function 
        QPageLayout.prototype.fullRectPoints = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.fullRectPoints");
          
              return this.__PROXY__.fullRectPoints(...args);
            
        };
        
        // function 
        QPageLayout.prototype.fullRectPixels = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.fullRectPixels");
          
              return this.__PROXY__.fullRectPixels(...args);
            
        };
        
        // function 
        QPageLayout.prototype.paintRect = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.paintRect");
          
              return this.__PROXY__.paintRect(...args);
            
        };
        
        // function 
        QPageLayout.prototype.paintRectPoints = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.paintRectPoints");
          
              return this.__PROXY__.paintRectPoints(...args);
            
        };
        
        // function 
        QPageLayout.prototype.paintRectPixels = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.paintRectPixels");
          
              return this.__PROXY__.paintRectPixels(...args);
            
        };
        
        // function 
        QPageLayout.prototype.equals = function(...args) 
          
        {
          //print("JS: QPageLayout.prototype.equals");
          
              return this.__PROXY__.equals(...args);
            
        };
        

      // static functions:
      QPageLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QPageLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QPageLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

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

      QPageLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      