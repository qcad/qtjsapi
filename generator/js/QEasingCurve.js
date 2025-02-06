
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
            arguments[2].getWrappedType()===RJSType_QEasingCurve.getIdStatic()))) {

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
          
            this.__PROXY__ = wrapper;
          

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
        return RJSType_QEasingCurve.getIdStatic();
      };

      QEasingCurve.prototype.getObjectType = function() {
        return RJSType_QEasingCurve.getIdStatic();
      };

      QEasingCurve.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QEasingCurve.getIdStatic()) {
          return true;
        }

        

        return false;


        
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
      
        // function 
        QEasingCurve.prototype.operator_assign = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.operator_assign");
          return this.__PROXY__.operator_assign(...args);
        };
    
        // function 
        QEasingCurve.prototype.swap = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.swap");
          return this.__PROXY__.swap(...args);
        };
    
        // function 
        QEasingCurve.prototype.amplitude = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.amplitude");
          return this.__PROXY__.amplitude(...args);
        };
    
        // function 
        QEasingCurve.prototype.setAmplitude = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.setAmplitude");
          return this.__PROXY__.setAmplitude(...args);
        };
    
        // function 
        QEasingCurve.prototype.period = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.period");
          return this.__PROXY__.period(...args);
        };
    
        // function 
        QEasingCurve.prototype.setPeriod = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.setPeriod");
          return this.__PROXY__.setPeriod(...args);
        };
    
        // function 
        QEasingCurve.prototype.overshoot = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.overshoot");
          return this.__PROXY__.overshoot(...args);
        };
    
        // function 
        QEasingCurve.prototype.setOvershoot = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.setOvershoot");
          return this.__PROXY__.setOvershoot(...args);
        };
    
        // function 
        QEasingCurve.prototype.addCubicBezierSegment = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.addCubicBezierSegment");
          return this.__PROXY__.addCubicBezierSegment(...args);
        };
    
        // function 
        QEasingCurve.prototype.addTCBSegment = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.addTCBSegment");
          return this.__PROXY__.addTCBSegment(...args);
        };
    
        // function 
        QEasingCurve.prototype.toCubicSpline = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.toCubicSpline");
          return this.__PROXY__.toCubicSpline(...args);
        };
    
        // function 
        QEasingCurve.prototype.type = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.type");
          return this.__PROXY__.type(...args);
        };
    
        // function 
        QEasingCurve.prototype.setType = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.setType");
          return this.__PROXY__.setType(...args);
        };
    
        // function 
        QEasingCurve.prototype.valueForProgress = function(...args) 
          
        {
          //print("JS: QEasingCurve.prototype.valueForProgress");
          return this.__PROXY__.valueForProgress(...args);
        };
    

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

      QEasingCurve.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      