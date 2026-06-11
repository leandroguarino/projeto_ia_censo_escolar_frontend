import { useState } from 'react'
import './App.css'

interface SchoolFeatures {
  QT_MAT_BAS: string
  QT_MAT_INF: string
  QT_MAT_INF_CRE: string
  QT_MAT_INF_PRE: string
  QT_MAT_FUND: string
  QT_MAT_FUND_AI: string
  QT_MAT_FUND_AF: string
  QT_MAT_MED: string
  QT_MAT_PROF: string
  QT_MAT_PROF_TEC: string
  QT_MAT_EJA: string
  QT_DOC_INF: string
  QT_DOC_INF_CRE: string
  QT_DOC_INF_PRE: string
  QT_DOC_FUND: string
  QT_DOC_FUND_AI: string
  QT_DOC_FUND_AF: string
  QT_DOC_MED: string
  QT_DOC_PROF: string
  QT_DOC_PROF_TEC: string
  QT_DOC_EJA: string
}

function App() {
  const [formData, setFormData] = useState<SchoolFeatures>({
    QT_MAT_BAS: '',
    QT_MAT_INF: '',
    QT_MAT_INF_CRE: '',
    QT_MAT_INF_PRE: '',
    QT_MAT_FUND: '',
    QT_MAT_FUND_AI: '',
    QT_MAT_FUND_AF: '',
    QT_MAT_MED: '',
    QT_MAT_PROF: '',
    QT_MAT_PROF_TEC: '',
    QT_MAT_EJA: '',
    QT_DOC_INF: '',
    QT_DOC_INF_CRE: '',
    QT_DOC_INF_PRE: '',
    QT_DOC_FUND: '',
    QT_DOC_FUND_AI: '',
    QT_DOC_FUND_AF: '',
    QT_DOC_MED: '',
    QT_DOC_PROF: '',
    QT_DOC_PROF_TEC: '',
    QT_DOC_EJA: ''
  })

  const [result, setResult] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Erro ao fazer predição')
      }

      const data = await response.json()
      setResult(data.prediction)
      setShowModal(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
    } finally {
      setLoading(false)
    }
  }

  const closeModal = () => {
    setShowModal(false)
    setResult(null)
  }

  const fieldLabels: { [key in keyof SchoolFeatures]: string } = {
    QT_MAT_BAS: 'Matrículas Básicas',
    QT_MAT_INF: 'Matrículas Infantil',
    QT_MAT_INF_CRE: 'Matrículas Creche',
    QT_MAT_INF_PRE: 'Matrículas Pré-escola',
    QT_MAT_FUND: 'Matrículas Fundamental',
    QT_MAT_FUND_AI: 'Matrículas Fundamental Anos Iniciais',
    QT_MAT_FUND_AF: 'Matrículas Fundamental Anos Finais',
    QT_MAT_MED: 'Matrículas Médio',
    QT_MAT_PROF: 'Matrículas Profissionalizante',
    QT_MAT_PROF_TEC: 'Matrículas Profissionalizante Técnico',
    QT_MAT_EJA: 'Matrículas EJA',
    QT_DOC_INF: 'Docentes Infantil',
    QT_DOC_INF_CRE: 'Docentes Creche',
    QT_DOC_INF_PRE: 'Docentes Pré-escola',
    QT_DOC_FUND: 'Docentes Fundamental',
    QT_DOC_FUND_AI: 'Docentes Fundamental Anos Iniciais',
    QT_DOC_FUND_AF: 'Docentes Fundamental Anos Finais',
    QT_DOC_MED: 'Docentes Médio',
    QT_DOC_PROF: 'Docentes Profissionalizante',
    QT_DOC_PROF_TEC: 'Docentes Profissionalizante Técnico',
    QT_DOC_EJA: 'Docentes EJA'
  }

  return (
    <div className="app-container">
      <h1>Classificação de Escolas</h1>
      <p>Preencha os dados da escola para classificá-la</p>

      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-grid">
          {Object.keys(formData).map((key) => (
            <div key={key} className="form-field">
              <label htmlFor={key}>{fieldLabels[key as keyof SchoolFeatures]}</label>
              <input
                type="number"
                id={key}
                name={key}
                value={formData[key as keyof SchoolFeatures]}
                onChange={handleInputChange}
                step="0.01"
                required
              />
            </div>
          ))}
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Classificando...' : 'Classificar'}
        </button>

        {error && <div className="error-message">{error}</div>}
      </form>

      {showModal && result && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Resultado da Classificação</h2>
            <p className="result-text">{result}</p>
            <button onClick={closeModal} className="close-button">Fechar</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
