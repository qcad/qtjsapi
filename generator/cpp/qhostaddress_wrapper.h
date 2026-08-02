
  // Auto generated
  
    #ifndef QHOSTADDRESS_H_WRAPPER
    #define QHOSTADDRESS_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QHostAddress>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QHostAddress>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QHostAddress
    class QTJSAPI_EXPORT QHostAddress_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QHostAddress_Wrapper(const QHostAddress_Wrapper&);

    public:
      // initialization of QHostAddress:
      static void init(RJSApi& handler);

      
        static QHostAddress* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QHostAddress:
          for (int i=0; i<basecasters_QHostAddress.length(); i++) {
            RJSBasecaster_QHostAddress* basecaster = basecasters_QHostAddress[i];
            QHostAddress* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QHostAddress:
          if (t==RJSType_QHostAddress::getIdStatic()) {
            return (QHostAddress*)vp;
          }

          qWarning() << "QHostAddress_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QHostAddress* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QHostAddress*: wrapper wraps NULL";
          }

          QHostAddress* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QHostAddress*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum SpecialAddress {
    Null = QHostAddress::Null,
Broadcast = QHostAddress::Broadcast,
LocalHost = QHostAddress::LocalHost,
LocalHostIPv6 = QHostAddress::LocalHostIPv6,
Any = QHostAddress::Any,
AnyIPv6 = QHostAddress::AnyIPv6,
AnyIPv4 = QHostAddress::AnyIPv4,

  };
  Q_ENUM(SpecialAddress)

  enum ConversionModeFlag {
    ConvertV4MappedToIPv4 = QHostAddress::ConvertV4MappedToIPv4,
ConvertV4CompatToIPv4 = QHostAddress::ConvertV4CompatToIPv4,
ConvertUnspecifiedAddress = QHostAddress::ConvertUnspecifiedAddress,
ConvertLocalHost = QHostAddress::ConvertLocalHost,
TolerantConversion = QHostAddress::TolerantConversion,
StrictConversion = QHostAddress::StrictConversion,

  };
  Q_ENUM(ConversionModeFlag)

  enum NetworkLayerProtocol {
    IPv4Protocol = QHostAddress::IPv4Protocol,
IPv6Protocol = QHostAddress::IPv6Protocol,
AnyIPProtocol = QHostAddress::AnyIPProtocol,
UnknownNetworkLayerProtocol = QHostAddress::UnknownNetworkLayerProtocol,

  };
  Q_ENUM(NetworkLayerProtocol)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QHostAddress_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QHostAddress_Wrapper(RJSApi& h, QHostAddress* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QHostAddress_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QHostAddress
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QHostAddress_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
#if QT_VERSION<QT_VERSION_CHECK(7,0,0)

#else

#endif

    // Class: QHostAddress
    // Function: swap
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  swap
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QHostAddress
    // Function: setAddress
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setAddress
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QHostAddress
    // Function: protocol
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  protocol
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: toIPv4Address
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toIPv4Address
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: toString
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  toString
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: scopeId
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  scopeId
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: setScopeId
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setScopeId
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QHostAddress
    // Function: isEqual
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isEqual
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isNull
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isNull
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: clear
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  clear
              (

                
              )
              
              ;
            
    // Class: QHostAddress
    // Function: isInSubnet
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isInSubnet
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isLoopback
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLoopback
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isGlobal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isGlobal
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isLinkLocal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isLinkLocal
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isSiteLocal
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isSiteLocal
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isUniqueLocalUnicast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isUniqueLocalUnicast
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isMulticast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isMulticast
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isBroadcast
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isBroadcast
              (

                
              )
              
                const
              
              ;
            
    // Class: QHostAddress
    // Function: isPrivateUse
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isPrivateUse
              (

                
              )
              
                const
              
              ;
            
          // destroy function for non-copyable objects:
          Q_INVOKABLE void destr() {
            
              if (wrapped!=nullptr) {
                
                    delete wrapped;
                  
                wrapped = nullptr;
              }
            
          }
        

        //public:
        // set engine:
        //Q_INVOKABLE void setHandler(RJSApi* h) {
        //  RJSWrapperObj::setHandler(h);
        //}
      

  // member functions for static properties, forward to static function
  


  // protected overwritten functions / events and their public invokable counterparts:
  
        public:

        // get type of wrapped object:
        Q_INVOKABLE
        virtual /*RJSType ID*/ int getWrappedType() const {
          return RJSType_QHostAddress::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QHostAddress* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QHostAddress* getWrapped() const {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object as void*:
        virtual void* getWrappedVoid() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        

        bool hasWrapped() const {
          
            return wrapped!=nullptr 
          
          ;
        }

        Q_INVOKABLE
        bool isNullWrapper() const {
          return !hasWrapped();
        }

        Q_INVOKABLE
        unsigned long long int getAddress() const {
          
            if (wrapped!=nullptr) {
              return (unsigned long long int)wrapped;
            }
          
          return (unsigned long long int)0;
        }

        

        //public slots:
          //void slotDestroyed(QObject* obj) {
          //  qDebug() << "destroying QObject:" << (long int)obj;
          //}

        

        private:

        
          // wrapped object:
          QHostAddress* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QHostAddress*> basecasters_QHostAddress;

      public:
        static void registerBasecaster_QHostAddress(RJSBasecaster_QHostAddress* bc) {
          basecasters_QHostAddress.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QHostAddress_Wrapper*)

    Q_DECLARE_INTERFACE(QHostAddress_Wrapper, "org.qcad.QHostAddress_Wrapper")

  
  #endif
  
