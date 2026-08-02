
  // Auto generated
  
    #ifndef QNETWORKPROXY_H_WRAPPER
    #define QNETWORKPROXY_H_WRAPPER

    // include header:
    //#include "header_h.h"
    
        #include "../RJSHelper.h"
      

    #include "RJSWrapperObj.h"
  
        #include <QUrl>
      
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QNetworkProxyQuery>
      
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QNetworkProxyQuery
    class QTJSAPI_EXPORT QNetworkProxyQuery_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QNetworkProxyQuery_Wrapper(const QNetworkProxyQuery_Wrapper&);

    public:
      // initialization of QNetworkProxyQuery:
      static void init(RJSApi& handler);

      
        static QNetworkProxyQuery* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QNetworkProxyQuery:
          for (int i=0; i<basecasters_QNetworkProxyQuery.length(); i++) {
            RJSBasecaster_QNetworkProxyQuery* basecaster = basecasters_QNetworkProxyQuery[i];
            QNetworkProxyQuery* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QNetworkProxyQuery:
          if (t==RJSType_QNetworkProxyQuery::getIdStatic()) {
            return (QNetworkProxyQuery*)vp;
          }

          qWarning() << "QNetworkProxyQuery_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QNetworkProxyQuery* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QNetworkProxyQuery*: wrapper wraps NULL";
          }

          QNetworkProxyQuery* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QNetworkProxyQuery*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum QueryType {
    TcpSocket = QNetworkProxyQuery::TcpSocket,
UdpSocket = QNetworkProxyQuery::UdpSocket,
SctpSocket = QNetworkProxyQuery::SctpSocket,
TcpServer = QNetworkProxyQuery::TcpServer,
UrlRequest = QNetworkProxyQuery::UrlRequest,
SctpServer = QNetworkProxyQuery::SctpServer,

  };
  Q_ENUM(QueryType)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QNetworkProxyQuery_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QNetworkProxyQuery_Wrapper(RJSApi& h, QNetworkProxyQuery* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QNetworkProxyQuery_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QNetworkProxyQuery
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 4
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QNetworkProxyQuery_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QNetworkProxyQuery
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
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
            
    // Class: QNetworkProxyQuery
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: queryType
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  queryType
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setQueryType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setQueryType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: peerPort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerPort
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setPeerPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPeerPort
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: peerHostName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  peerHostName
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setPeerHostName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPeerHostName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: localPort
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  localPort
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setLocalPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setLocalPort
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: protocolTag
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  protocolTag
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setProtocolTag
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setProtocolTag
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: url
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  url
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxyQuery
    // Function: setUrl
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUrl
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QNetworkProxyQuery::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QNetworkProxyQuery* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QNetworkProxyQuery* getWrapped() const {
          
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
          QNetworkProxyQuery* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QNetworkProxyQuery*> basecasters_QNetworkProxyQuery;

      public:
        static void registerBasecaster_QNetworkProxyQuery(RJSBasecaster_QNetworkProxyQuery* bc) {
          basecasters_QNetworkProxyQuery.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QNetworkProxyQuery_Wrapper*)

    Q_DECLARE_INTERFACE(QNetworkProxyQuery_Wrapper, "org.qcad.QNetworkProxyQuery_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QNetworkProxy>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QNetworkProxy_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QNetworkProxy_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QNetworkProxy
    // Function: setApplicationProxy
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationProxy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: applicationProxy
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  applicationProxy
              (

                
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QNetworkProxy_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QNetworkProxy
    class QTJSAPI_EXPORT QNetworkProxy_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QNetworkProxy_Wrapper(const QNetworkProxy_Wrapper&);

    public:
      // initialization of QNetworkProxy:
      static void init(RJSApi& handler);

      
        static QNetworkProxy* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QNetworkProxy:
          for (int i=0; i<basecasters_QNetworkProxy.length(); i++) {
            RJSBasecaster_QNetworkProxy* basecaster = basecasters_QNetworkProxy[i];
            QNetworkProxy* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QNetworkProxy:
          if (t==RJSType_QNetworkProxy::getIdStatic()) {
            return (QNetworkProxy*)vp;
          }

          qWarning() << "QNetworkProxy_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QNetworkProxy* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QNetworkProxy*: wrapper wraps NULL";
          }

          QNetworkProxy* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QNetworkProxy*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
        // enums:
        
  enum ProxyType {
    DefaultProxy = QNetworkProxy::DefaultProxy,
Socks5Proxy = QNetworkProxy::Socks5Proxy,
NoProxy = QNetworkProxy::NoProxy,
HttpProxy = QNetworkProxy::HttpProxy,
HttpCachingProxy = QNetworkProxy::HttpCachingProxy,
FtpCachingProxy = QNetworkProxy::FtpCachingProxy,

  };
  Q_ENUM(ProxyType)

  enum Capability {
    TunnelingCapability = QNetworkProxy::TunnelingCapability,
ListeningCapability = QNetworkProxy::ListeningCapability,
UdpTunnelingCapability = QNetworkProxy::UdpTunnelingCapability,
CachingCapability = QNetworkProxy::CachingCapability,
HostNameLookupCapability = QNetworkProxy::HostNameLookupCapability,
SctpTunnelingCapability = QNetworkProxy::SctpTunnelingCapability,
SctpListeningCapability = QNetworkProxy::SctpListeningCapability,

  };
  Q_ENUM(Capability)

    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QNetworkProxy_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QNetworkProxy_Wrapper(RJSApi& h, QNetworkProxy* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QNetworkProxy_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  
    // Class: QNetworkProxy
    // Function: 
    // Source: 
    // Static: false
    // Parameters: 5
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              QNetworkProxy_Wrapper
                
              (

                
                  // RJSApi:
                  QObject* h
                  
                  ,
                  
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    , 
  const QJSValue& 
  a3
      = QJSValue()
    , 
  const QJSValue& 
  a4
      = QJSValue()
    , 
  const QJSValue& 
  a5
      = QJSValue()
    
              )
              
              ;
            

    // non-static functions:
    
    // Class: QNetworkProxy
    // Function: operator_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
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
            
    // Class: QNetworkProxy
    // Function: equals
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  equals
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: operator_not_assign
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  operator_not_assign
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setType
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setType
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: type
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  type
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setCapabilities
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setCapabilities
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: capabilities
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  capabilities
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: isCachingProxy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isCachingProxy
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: isTransparentProxy
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  isTransparentProxy
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setUser
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUser
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: user
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  user
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setPassword
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPassword
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: password
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  password
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setHostName
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHostName
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: hostName
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hostName
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setPort
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setPort
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: port
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  port
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: headers
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  headers
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setHeaders
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeaders
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: header
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  header
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setHeader
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxy
    // Function: hasRawHeader
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  hasRawHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: rawHeaderList
    // Source: 
    // Static: false
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rawHeaderList
              (

                
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: rawHeader
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  rawHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
                const
              
              ;
            
    // Class: QNetworkProxy
    // Function: setRawHeader
    // Source: 
    // Static: false
    // Parameters: 2
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setRawHeader
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    , 
  const QJSValue& 
  a2
      = QJSValue()
    
              )
              
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
          return RJSType_QNetworkProxy::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QNetworkProxy* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QNetworkProxy* getWrapped() const {
          
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
          QNetworkProxy* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QNetworkProxy*> basecasters_QNetworkProxy;

      public:
        static void registerBasecaster_QNetworkProxy(RJSBasecaster_QNetworkProxy* bc) {
          basecasters_QNetworkProxy.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QNetworkProxy_Wrapper*)

    Q_DECLARE_INTERFACE(QNetworkProxy_Wrapper, "org.qcad.QNetworkProxy_Wrapper")

  
    #include <QQmlEngine>
    
        #include "RJSType.h"
      
        #include <QNetworkProxyFactory>
      
      // singleton class wrapper for static functions:
      class QTJSAPI_EXPORT QNetworkProxyFactory_WrapperSingleton: public QObject {
      Q_OBJECT
      QML_INTERFACE

      // constants:
      

      // static properties:
      

      public:
      //Q_INVOKABLE 
      QNetworkProxyFactory_WrapperSingleton(RJSApi& h) 
        : QObject(), 
          handler(h)
          
          {}

      

      // static functions:
      
    // Class: QNetworkProxyFactory
    // Function: usesSystemConfiguration
    // Source: 
    // Static: true
    // Parameters: 0
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  usesSystemConfiguration
              (

                
              )
              
              ;
            
    // Class: QNetworkProxyFactory
    // Function: setUseSystemConfiguration
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setUseSystemConfiguration
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyFactory
    // Function: setApplicationProxyFactory
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  setApplicationProxyFactory
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyFactory
    // Function: proxyForQuery
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  proxyForQuery
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            
    // Class: QNetworkProxyFactory
    // Function: systemProxyForQuery
    // Source: 
    // Static: true
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  systemProxyForQuery
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
              ;
            

      private:
          RJSApi& handler;
          //static QNetworkProxyFactory_WrapperSingleton* _singleInstance;

          // constants:
          
      };
    
    // static functions implementation in singleton wrapper:
    
    // wrapper class for QNetworkProxyFactory
    class QTJSAPI_EXPORT QNetworkProxyFactory_Wrapper : public RJSWrapperObj {

    
      Q_OBJECT
      QML_INTERFACE
    

    private:
      // disable copy constructor:
      QNetworkProxyFactory_Wrapper(const QNetworkProxyFactory_Wrapper&);

    public:
      // initialization of QNetworkProxyFactory:
      static void init(RJSApi& handler);

      
        static QNetworkProxyFactory* castToBase(void* vp, /*RJSType ID*/ int t) {
          
            // check if pointer points to derrived type:
            

          // hook for modules to cast from other types to base QNetworkProxyFactory:
          for (int i=0; i<basecasters_QNetworkProxyFactory.length(); i++) {
            RJSBasecaster_QNetworkProxyFactory* basecaster = basecasters_QNetworkProxyFactory[i];
            QNetworkProxyFactory* ret = basecaster->castToBase(t, vp);
            if (ret!=nullptr) {
              return ret;
            }
          }

          // object is a pointer to base class QNetworkProxyFactory:
          if (t==RJSType_QNetworkProxyFactory::getIdStatic()) {
            return (QNetworkProxyFactory*)vp;
          }

          qWarning() << "QNetworkProxyFactory_Wrapper::castToBase: type not found: " << RJSHelper::getTypeName(t);

          return nullptr;
          
        }

        static QNetworkProxyFactory* getWrappedBase(RJSWrapper* wrapper) {
          int t = wrapper->getWrappedType();
          void* vp = wrapper->getWrappedVoid();
          if (vp==nullptr) {
              //qWarning() << "getWrapped_QNetworkProxyFactory*: wrapper wraps NULL";
          }

          QNetworkProxyFactory* ret = castToBase(vp, t);
          if (ret==nullptr && vp!=nullptr) {
              qWarning() << "QNetworkProxyFactory*_Wrapper::getWrappedBase: extracted type " << t << "from wrapper is NULL";
          }
          return ret;
        }
      
    /*
    // special constructor used as prototype:
    
          Q_INVOKABLE 
          QNetworkProxyFactory_Wrapper(QJSEngine* e);
        
    */

    
      // special constructor to wrap existing object:
      
            //Q_INVOKABLE 
            QNetworkProxyFactory_Wrapper(RJSApi& h, QNetworkProxyFactory* o, bool wrappedCreated);
          

      // destructor:
      
          virtual ~QNetworkProxyFactory_Wrapper();
        
    // initialization of signal forwarding
    
        void initConnections();
      

  // constructors:
  

    // non-static functions:
    
    // Class: QNetworkProxyFactory
    // Function: queryProxy
    // Source: 
    // Static: false
    // Parameters: 1
    // preceding Parameters: -1

              public:
              Q_INVOKABLE 
              
                  QJSValue 
                  queryProxy
              (

                
  const QJSValue& 
  a1
      = QJSValue()
    
              )
              
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
          return RJSType_QNetworkProxyFactory::getIdStatic();
        }

        // return true if wrapped object is owned by C++ (not deleted):
        Q_INVOKABLE
        virtual bool isCppOwnership() const {
          
              return false;
            
        }

        // get wrapped object:
        QNetworkProxyFactory* getWrapped() {
          
            if (wrapped!=nullptr) {
              return wrapped;
            }
          
          return nullptr;
        }

        // get wrapped object (const):
        QNetworkProxyFactory* getWrapped() const {
          
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
          QNetworkProxyFactory* wrapped;
        

        bool wrappedCreated;
      
      private:
        // list of registered base casters for this wrapper class:
        static QList<RJSBasecaster_QNetworkProxyFactory*> basecasters_QNetworkProxyFactory;

      public:
        static void registerBasecaster_QNetworkProxyFactory(RJSBasecaster_QNetworkProxyFactory* bc) {
          basecasters_QNetworkProxyFactory.append(bc);
        }
      
    };

    Q_DECLARE_METATYPE(QNetworkProxyFactory_Wrapper*)

    Q_DECLARE_INTERFACE(QNetworkProxyFactory_Wrapper, "org.qcad.QNetworkProxyFactory_Wrapper")

  
  #endif
  
