function familia() {
    const membros = ['Eduarda', 'Junior' ];
  
    function adicionarMembro(nome) {
      membros.push(nome);
    }
  
    function listarMembros() {
      membros.forEach(membro => console.log(membro));
    }
  
    return {
      adicionarMembro,
      listarMembros
    };
  }
  
  const minhaFamilia = familia();
  
  minhaFamilia.adicionarMembro('Claudia');
  
  minhaFamilia.listarMembros(); 
  