
      // auto generated
      //var self;

      // class constructor:
      function QEasingCurve() {
        

        // should be QEasingCurve_BaseJs.call(this, engine):
        //QEasingCurve.prototype = new QEasingCurve_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===
              
                  RJSType.QEasingCurve_Type
                
            ))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              copyProperties(this, wrapper, QEasingCurve);
            //}
          }
          else {
            qWarning("QEasingCurve.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QEasingCurve_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEasingCurve);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEasingCurve);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEasingCurve_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEasingCurve);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEasingCurve);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QEasingCurve_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          

        copyProperties(this, wrapper, QEasingCurve);

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QEasingCurve);
  }

  
  else {
    
        print("QEasingCurve(): wrong number / type of arguments");
      
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
          

          // signal aliases:
          if (Object.getPrototypeOf(this)!=null) {
            
          }
        }
      }

      //QEasingCurve.prototype = new QEasingCurve_BaseJs(engine);
      //QEasingCurve.prototype = new QEasingCurve_Wrapper(engine);
      QEasingCurve.prototype = new Object();

      QEasingCurve.prototype.toString = function() {
          //return "QEasingCurve [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QEasingCurve [JS]";
        };
      QEasingCurve.getObjectType = function() {
        
            return RJSType.QEasingCurve_Type;
          
      };

      QEasingCurve.prototype.getObjectType = function() {
        
            return RJSType.QEasingCurve_Type;
          
      };

      QEasingCurve.prototype.isOfObjectType = function(t) {
        switch(t) {

        
            case RJSType.QEasingCurve_Type:
              return true;
          
        default:
          return false;
        }

        /*
        return [
          RJSType.QEasingCurve_Type, 
          
        ].includes(t);
        */
      };

      // enum values:
      
  // enum: Type
QEasingCurve.Linear = QEasingCurve_Wrapper.Linear;
QEasingCurve.InQuad = QEasingCurve_Wrapper.InQuad;
QEasingCurve.OutQuad = QEasingCurve_Wrapper.OutQuad;
QEasingCurve.InOutQuad = QEasingCurve_Wrapper.InOutQuad;
QEasingCurve.OutInQuad = QEasingCurve_Wrapper.OutInQuad;
QEasingCurve.InCubic = QEasingCurve_Wrapper.InCubic;
QEasingCurve.OutCubic = QEasingCurve_Wrapper.OutCubic;
QEasingCurve.InOutCubic = QEasingCurve_Wrapper.InOutCubic;
QEasingCurve.OutInCubic = QEasingCurve_Wrapper.OutInCubic;
QEasingCurve.InQuart = QEasingCurve_Wrapper.InQuart;
QEasingCurve.OutQuart = QEasingCurve_Wrapper.OutQuart;
QEasingCurve.InOutQuart = QEasingCurve_Wrapper.InOutQuart;
QEasingCurve.OutInQuart = QEasingCurve_Wrapper.OutInQuart;
QEasingCurve.InQuint = QEasingCurve_Wrapper.InQuint;
QEasingCurve.OutQuint = QEasingCurve_Wrapper.OutQuint;
QEasingCurve.InOutQuint = QEasingCurve_Wrapper.InOutQuint;
QEasingCurve.OutInQuint = QEasingCurve_Wrapper.OutInQuint;
QEasingCurve.InSine = QEasingCurve_Wrapper.InSine;
QEasingCurve.OutSine = QEasingCurve_Wrapper.OutSine;
QEasingCurve.InOutSine = QEasingCurve_Wrapper.InOutSine;
QEasingCurve.OutInSine = QEasingCurve_Wrapper.OutInSine;
QEasingCurve.InExpo = QEasingCurve_Wrapper.InExpo;
QEasingCurve.OutExpo = QEasingCurve_Wrapper.OutExpo;
QEasingCurve.InOutExpo = QEasingCurve_Wrapper.InOutExpo;
QEasingCurve.OutInExpo = QEasingCurve_Wrapper.OutInExpo;
QEasingCurve.InCirc = QEasingCurve_Wrapper.InCirc;
QEasingCurve.OutCirc = QEasingCurve_Wrapper.OutCirc;
QEasingCurve.InOutCirc = QEasingCurve_Wrapper.InOutCirc;
QEasingCurve.OutInCirc = QEasingCurve_Wrapper.OutInCirc;
QEasingCurve.InElastic = QEasingCurve_Wrapper.InElastic;
QEasingCurve.OutElastic = QEasingCurve_Wrapper.OutElastic;
QEasingCurve.InOutElastic = QEasingCurve_Wrapper.InOutElastic;
QEasingCurve.OutInElastic = QEasingCurve_Wrapper.OutInElastic;
QEasingCurve.InBack = QEasingCurve_Wrapper.InBack;
QEasingCurve.OutBack = QEasingCurve_Wrapper.OutBack;
QEasingCurve.InOutBack = QEasingCurve_Wrapper.InOutBack;
QEasingCurve.OutInBack = QEasingCurve_Wrapper.OutInBack;
QEasingCurve.InBounce = QEasingCurve_Wrapper.InBounce;
QEasingCurve.OutBounce = QEasingCurve_Wrapper.OutBounce;
QEasingCurve.InOutBounce = QEasingCurve_Wrapper.InOutBounce;
QEasingCurve.OutInBounce = QEasingCurve_Wrapper.OutInBounce;
QEasingCurve.InCurve = QEasingCurve_Wrapper.InCurve;
QEasingCurve.OutCurve = QEasingCurve_Wrapper.OutCurve;
QEasingCurve.SineCurve = QEasingCurve_Wrapper.SineCurve;
QEasingCurve.CosineCurve = QEasingCurve_Wrapper.CosineCurve;
QEasingCurve.BezierSpline = QEasingCurve_Wrapper.BezierSpline;
QEasingCurve.TCBSpline = QEasingCurve_Wrapper.TCBSpline;
QEasingCurve.Custom = QEasingCurve_Wrapper.Custom;
QEasingCurve.NCurveTypes = QEasingCurve_Wrapper.NCurveTypes;


      // functions:
      

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QEasingCurve.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QEasingCurve.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};
    