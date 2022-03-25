package com.site.agencia;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.agencia.entities.Cliente;
import com.site.agencia.entities.Destino;
import com.site.agencia.repositorys.ClienteRepository;
import com.site.agencia.repositorys.DestinoRepository;

@SpringBootApplication
public class AgenciaApplication implements CommandLineRunner {

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private DestinoRepository destinoRepository;
	
	
	public static void main(String[] args) {
		SpringApplication.run(AgenciaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		/*Cliente c1 = new Cliente(null, "Iane", "Rua Limoeiro", "iane.nunes@yahoo.com.br");
		Cliente c2 = new Cliente(null, "Osvaldo", "Rua A", "osvaldo.marketing@gmail.com");
		
		Destino d1 = new Destino(null, "Salvador", "21/04/2022", "27/04/2022", 750.00, c1 );
		Destino d2 = new Destino(null, "Uruguai", "01/04/2022", "27/05/2022", 1250.80, c2 );
		
	    c1.getDestinos().addAll(Arrays.asList(d1));
		c2.getDestinos().addAll(Arrays.asList(d2));
	
		clienteRepository.save(c1);
		clienteRepository.save(c2);
		
		
		destinoRepository.save(d1);
		destinoRepository.save(d2);*/
	}

}
